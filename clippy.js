class Clippy {
  constructor () {
    this.wirePrices = []
    this.state = 'initializing'
    this.prioritizedProjects = [
      // project3,   // creativity
      // project6,   // limerick
      // project13,  // lexical processing
      // project7,   // improved wire extrusion TODO decrease prio to after donkey space?
      // project14,  // combinatory harmonics
      // project15,  // hadwiger problem
      // project17,  // tóth sausage conjecture
      // project19,  // donkey space
      project11,  // new slogan

    ]
    this.prioritizedImprovements = [
      addProc, // 2 proc 1 mem
      addProc, // 3 proc 1 mem
      addProc, // 4 proc 1 mem
      addMem,  // 4 proc 2 mem
      addProc, // 5 proc 2 mem
    ]
  }

  tryToEffectNextProject () {
    if (this.prioritizedProjects.length > 0) {
      const nextProject = this.prioritizedProjects[0]
      if (!nextProject.flag
        && nextProject.trigger()
        && nextProject.cost()
        && nextProject.element
        && nextProject.element.parentNode) {
          console.log('effecting', nextProject.title)
          nextProject.effect()
          this.prioritizedProjects.shift()
      }
    }
  }

  tryToMakeNextImprovement () {
    if (trust > processors + memory) {
      if (this.prioritizedImprovements.length > 0) {
        this.prioritizedImprovements.shift()()
      } else { // TODO prioritize all improvements?
        if (Math.random() < 0.5) addProc(); else addMem()
      }
    }
  }

  async phase1 () {
    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
    console.log('initiating phase 1')
    while (1 == 1) {
      if (wire > 0) {
        clipClick(1)
      }
      if (margin > 0.09) {
        lowerPrice()
      }
      if (funds >= wireCost) {
        if (wireCost <= this.averageWirePrice) {
          buyWire()
        }
      }
      this.tryToMakeNextImprovement()
      this.tryToEffectNextProject()
      if (hypnoDroneTextElement.innerHTML) {
        console.log('finished phase 1!')
        break
      }
      await sleep(0)
    }
  }

  phase2 () {
    console.log('initiating phase 2')
    let inPhase2 = false
    if (inPhase2) this.phase2()
    else this.done()
  }

  done () {
    console.log("done")
  }

  launchStateLogger () {
    setInterval(_ => console.log(`state: ${this.state}`), 10000)
  }

  launchWirePriceSampler () {
    setInterval(_ => {
      if (this.wirePrices.length === 10)
        this.wirePrices.shift()
      this.wirePrices.push(wireCost)
      this.averageWirePrice = this.wirePrices.reduce((a, b) => a + b) / this.wirePrices.length
      // console.log(`average wire price: ${this.averageWirePrice}`)
    }, 5000)
  }

  async launchStateMachine () {
    await this.phase1()
    this.done()
  }

  async exec () {
    // this.launchStateLogger()
    this.launchWirePriceSampler()
    await this.launchStateMachine()
  }
}

const clippy = new Clippy()
clippy.exec()
  .then(_ => console.log('yay'))
  .catch(err => console.error(err))