class MenuEntry {
    _name: () => string;
    _handler: () => void;
    _icon: Image;

    constructor(name: () => string, handler: () => void, icon: Image) {
        this._name = name;
        this._handler = handler;
        this._icon = icon;
    }

    private get name(): () => string {
        return this._name;
    }

    private get handler(): () => void {
        return this._handler;
    }

    private get icon(): Image {
        return this._icon;
    }

    private set name(str: () => string) {
        this.name = str;
    }

    private set handler(a: () => void) {
        this.handler = a;
    }

    private set icon(image: Image) {
        this.icon = image;
    }

    register() {
        scene.systemMenu.addEntry(this.name, this.handler, this.icon);
    }
}