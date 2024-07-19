class LivingThing {
  name: string;
  age: string;

  constructor() {
    this.name = "";
    this.age = "";
  }

  breath() {}
  eat() {}
}

function funcA() {}
const funcB = () => {};

class Human extends LivingThing {
  constructor() {
    super();
    this.name = "human";
    this.age = "human";
  }
}

const lvh = new LivingThing();
lvh.age; // ""

const personA = new Human();
personA.age; // "human"

interface LivingThingIF {
  name: string;
  age: string;
  breath: () => void;
}

interface HumanIF extends LivingThingIF {
  height: number;
}

// const personB = new HumanIF()

// class <=> object
// interface <=> type

const personB = {
  name: "human",
  age: "human",
  breath() {},
  eat() {},
};

personB.age;

type LivingThingType = {
  name: string;
  age: string;
  breath: () => void;
};

type HumanType = LivingThingType & {
  height: number;
};
