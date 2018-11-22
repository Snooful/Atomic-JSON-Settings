const { SettingsManager } = require("@snooful/settings-base");

const writeJSON = require("write-json-file");
const loadJSON = require("load-json-file");

class AtomicJSONSettingsManager extends SettingsManager {
	constructor(path) {
			super();

			this.path = path;
			this.init();
	}

	async init() {
		try {
			this.settings = await loadJSON(this.path);
			return true;
		} catch {
			return false;
		}
	}

	async update() {
		try {
			await writeJSON(this.path, this.settings);
			return true;
		} catch {
			return false;
		}
	}
}
module.exports.SettingsManager = AtomicJSONSettingsManager;

module.exports.extension = ".json";