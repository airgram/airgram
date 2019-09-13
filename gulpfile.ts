import del from 'del'
import gulp from 'gulp'
import jsonEditor from 'gulp-json-editor'
import replace from 'gulp-replace'
import shell from 'gulp-shell'
import ts from 'gulp-typescript'
import { Gulpclass, MergedTask, SequenceTask, Task } from 'gulpclass'
import packages from './package-map.json'
import pkg from './package.json'

@Gulpclass()
export class Gulpfile {
  // -------------------------------------------------------------------------
  // General tasks
  // -------------------------------------------------------------------------

  /**
   * Creates a package that can be published to npm.
   */
  @SequenceTask()
  public build (): unknown {
    return [
      'clean',
      'packageCompile',
      'packageMoveCompiledFiles',
      'packageClearCompileDirectory',
      ['packagePreparePackageFile', 'copyTypeDefinitionFiles', 'packageReadmeFile']
    ]
  }

  /**
   * Cleans dist folder.
   */
  @Task()
  public clean (cb: del.Options): Promise<string[]> {
    return del(['dist/**'], cb)
  }

  // -------------------------------------------------------------------------
  // Packaging tasks
  // -------------------------------------------------------------------------

  /**
   * Runs typescript files compilation.
   */
  @Task()
  public compile (): NodeJS.ReadWriteStream {
    return gulp.src('*.ts', { read: false }).pipe(shell(['tsc']))
  }

  /**
   * Removes unnecessary files from final package directory.
   */
  @Task()
  public packageClearCompileDirectory (cb: del.Options): Promise<string[]> {
    return del(
      ['./dist/package/src/**', './dist/package/__tests__', './dist/package/examples/**'],
      cb
    )
  }

  /**
   * Complies all sources to the package directory.
   */
  @MergedTask()
  public packageCompile (): NodeJS.ReadWriteStream[] {
    const tsProject = ts.createProject('tsconfig.json')
    const tsResult = tsProject
      .src()
      // .pipe(sourcemaps.init())
      .pipe(tsProject())

    return [
      tsResult.dts.pipe(gulp.dest('./dist/package')),
      tsResult.js
      // .pipe(sourcemaps.write(".", { sourceRoot: "", includeContent: true }))
        .pipe(gulp.dest('./dist/package'))
    ]
  }

  /**
   * Moves all compiled files to the final package directory.
   */
  @Task()
  public packageMoveCompiledFiles (): NodeJS.ReadWriteStream {
    return gulp.src('./dist/package/src/**/*').pipe(gulp.dest('./dist/package'))
  }

  /**
   * Copy type definitions.
   */
  @Task()
  public copyTypeDefinitionFiles (): NodeJS.ReadWriteStream {
    return gulp.src('./src/**/*.d.ts').pipe(gulp.dest('./dist/package'))
  }

  /**
   * Change the "private" state of the packaged package.json file to public.
   */
  @Task()
  public packagePreparePackageFile (): NodeJS.ReadWriteStream {
    return gulp
      .src('./package.json')
      .pipe(jsonEditor((json: Record<string, any>) => {
        const dependencies: Record<string, string> | undefined = json.dependencies
        json.private = false
        json.sideEffects = false
        json.main = 'index.js'
        json.types = 'index.d.ts'
        json.author = pkg.author
        json.homepage = pkg.homepage
        json.repository = pkg.repository

        if (dependencies) {
          json.dependencies = Object.keys(dependencies).reduce<Record<string, string>>((obj, name) => {
            if (name in packages) {
              obj[name] = '^' + (packages as any)[name].version
            }
            return obj
          }, dependencies)
        }
        delete json.scripts
        delete json.devDependencies
        delete json['pre-commit']
        return json
      }))
      .pipe(gulp.dest('./dist/package'))

    // gulp.src("./manifest.json")
    //   .pipe(jeditor(function(json) {
    //     json.version = "1.2.3";
    //     return json; // must return JSON object.
    //   }))
    //   .pipe(gulp.dest("./dest"));
  }

  /**
   * This task will replace all typescript code blocks in the README
   * (since npm does not support typescript syntax highlighting)
   * and copy this README file into the package folder.
   */
  @Task()
  public packageReadmeFile (): NodeJS.ReadWriteStream {
    return gulp
      .src('./README.md')
      .pipe(replace(/```ts([\s\S]*?)```/g, '```js$1```'))
      .pipe(gulp.dest('./dist/package'))
  }
}
