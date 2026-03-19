class Backend {
    _project: Project;

    constructor(project: Project) {
        this._project = project;
    }

    private get project(): Project {
        return this._project;
    }

    private set project(proj: Project) {
        this.project = proj;
    }

    runInBackground(toRun: () => void) {
        control.runInBackground(toRun);
    }

    runInParallel(toRun: () => void) {
        control.runInParallel(toRun);
    }

    runBenchmark(toTest: () => void): number {
        let time = control.benchmark(toTest);
        return time;
    }
}

/*
logging, stopping
control.runInBackground
control.runInParallel

*/
