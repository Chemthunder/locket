
namespace locket {


    export function createMenuEntry(name: string, handler: () => void, icon: Image): MenuEntry {
        function nameToFunction(): string {
            return name.toUpperCase();
        }

        let createdEntry = new MenuEntry(nameToFunction, handler, icon);
        return createdEntry;
    }

    export function bootstrapBackend(project: Project): Backend {
        const createdBackend = new Backend(project);
        project.log("Created Backend!", LogTypes.INFO);
        return createdBackend;
    }
}