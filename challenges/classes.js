// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker {
  constructor(atts) {
    this.length = atts.length;
    this.width = atts.width;
    this.height = atts.height;
  }
  volume() {
    return this.length * this.width * this.height;
  }

  surfaceArea() {
    return (
      this.length * this.width +
      this.length * this.height +
      this.width * this.height
    );
  }
}

const cuboid = new CuboidMaker({
  length: 4,
  width: 5,
  height: 5
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(`refactor volume:${cuboid.volume()}`); // 100
console.log(`refactor SA:${cuboid.surfaceArea()}`); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
