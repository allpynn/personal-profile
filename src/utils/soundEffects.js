class SoundEffects {
  constructor() {
    this.sounds = {};
    this.isMuted = false;
    this.volume = 0.5;
    this.init();
  }

  init() {
    // Preload sound files
    this.loadSound("click", "/assets/sounds/click.mp3");
  }

  loadSound(name, path) {
    try {
      this.sounds[name] = new Audio(path);
      this.sounds[name].volume = this.volume;
      this.sounds[name].preload = "auto";
    } catch (error) {
      console.warn(`Failed to load sound: ${name}`, error);
    }
  }

  play(soundName) {
    if (this.isMuted) return;

    const sound = this.sounds[soundName];
    if (sound) {
      // Clone the audio to allow multiple simultaneous plays
      const soundClone = sound.cloneNode();
      soundClone.volume = this.volume;

      soundClone.play().catch((error) => {
        console.warn(`Failed to play sound: ${soundName}`, error);
      });
    }
  }

  playClick() {
    this.play("click");
  }
}

// Create a singleton instance
const soundEffects = new SoundEffects();

export default soundEffects;
