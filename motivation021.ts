abstract class Stress {
	reason;
	circumstances;

	constructor(reason, circumstances) {
		this.reason = reason;
		this.circumstances = circumstances;
	}

	abstract toExperience();
	abstract toStrength();
}
