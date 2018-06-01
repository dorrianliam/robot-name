const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

class RobotName {
  public name: string
  static existingRobotNames = new Set()

  constructor() {
    this.resetName()
  }

  public resetName() {
    this.name = this.generateUniqueName()
    RobotName.existingRobotNames.add(this.name)
  }

  private generateName() {
    return this.randomLetter() + this.randomLetter() + this.randomNumber(100, 1000)
  }

  private randomLetter(): string {
    return ALPHABET[this.randomNumber(0, ALPHABET.length)]
  }

  private randomNumber(min: number, max: number): number {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
  }

  private isUniqueName(name: string) {
    return !RobotName.existingRobotNames.has(name)
  }

  private generateUniqueName() {
    let name = this.generateName()

    while (!this.isUniqueName(name)) {
      name = this.generateName()
    }

    return name
  }
}

export default RobotName
