/**
 * Locket provides various utilities for the Backend.
 */
//% advanced=true
//% weight=90 color=#ffa95e icon="\uf06d"
namespace locket {


    /**
     * Creates a new Menu Entry within the base MakeCode menu.
     * @param name The name of the Menu Entry
     * @param handler The functionality of the Menu Entry
     * @param icon The Menu Entry's icon.
     */
    //% block="create Menu Entry with $name, $handler, $icon"
    //% blockId=locketmenuentry
    //% name.defl=menuName
    //% handler.defl=null
    //% icon.defl=myIcon
    //% weight=97
    //% blockSetVariable=myMenuEntry
    //% expandableArgumentMode=toggle
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