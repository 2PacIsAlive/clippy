class Clippy {
  constructor () {
    this.wirePrices = []
    this.state = 'initializing'
    this.objectives = {
      project: [
        project3,   // creativity
        project6,   // limerick
        project13,  // lexical processing
        project7,   // improved wire extrusion TODO decrease prio to after donkey space?
        project14,  // combinatory harmonics
        project15,  // hadwiger problem
        project17,  // tóth sausage conjecture
        project19,  // donkey space
        project11,  // new slogan
        project8,   // optimized wire extrusion
        project1,   // improved autoclickers            TODO after quantum
        project12,  // catchy jingle
        project4,   // even better autoclickers
        project5,   // optimized autoclippers
        project16,  // hadwiger clip diagrams
        project50,  // quantum computing
        project51,  // photonic chip 1
        project51,  // photonic chip 2
        project51,  // photonic chip 3        
        project51,  // photonic chip 4
        project51,  // photonic chip 5
        project51,  // photonic chip 6
        project51,  // photonic chip 7
        project51,  // photonic chip 8
        project51,  // photonic chip 9
        project51,  // photonic chip 10
        project9,   // microlattice shapecasting

      ],
      compute: [
        addProc, // 2 proc 1 mem
        addProc, // 3 proc 1 mem
        addProc, // 4 proc 1 mem
        addMem,  // 4 proc 2 mem
        addProc, // 5 proc 2 mem
        addProc, // 6 proc 2 mem
        addMem,  // 6 proc 3 mem
        addMem,  // 6 proc 4 mem
        addMem,  // 6 proc 5 mem
        addMem,  // 6 proc 6 mem
        addMem,  // 6 proc 7 mem
        addMem,  // 6 proc 8 mem
        addMem,  // 6 proc 9 mem
        addMem,  // 6 proc 10 mem
        
      ],
      margin: [
        {
          state: 'getting off the ground',
          action: function () {
            if (margin > 0.09) lowerPrice()
          },
          complete: function () {
            return marketingLvl > 1
          }
        }, {
          state: 'tempering demand',
          action: function () {
            if (demand * 10 > 100) raisePrice()
          },
          complete: function () {
            return project12.flag
          }
        }, {
          state: 'burning initial inventory',
          action: function () {
            if (demand * 10 > 300) raisePrice() 
          },
          complete: function () {
            unsoldClips <= 1000
          }
        }
      ],
      marketing: [
        {
          state: 'tempering demand',
          action: function () {
            //
          },
          complete: function () {
            return project11.flag
          }
        }, {
          state: 'posting fliers around town',
          action: function () {
            if (funds >= adCost) buyAds()
          },
          complete: function () {
            return marketingLvl > 2
          }
        }
      ],
      wire: [
        {
          state: 'hand-folding',
          action: () => {
            if (funds >= wireCost) {
              if (wireCost <= this.averageWirePrice
                && wire < 10000) {
                  console.log('buying wire')
                  buyWire()
              }
            }
          },
          complete: function () {
            return project11.flag
          }
        }, {
          state: 'saving up for ad space',
          action: () => {
            if (funds >= wireCost) {
              if (wireCost <= this.averageWirePrice
                && wire < 1000) {
                  buyWire()
              }
            }
          },
          complete: function () {
            return project26.flag
          }
        }
      ],
      automation: [
        {
          state: 'hand-folding',
          action: function () {
            //
          },
          complete: function () {
            return marketingLvl > 1
          }
        }, {
          state: 'buying hella auto-clippers',
          action: function () {
            if (funds >= clipperCost) makeClipper()
          },
          complete: function () {
            return clipmakerLevel == 75
          }
        }, {
          state: 'buying hella mega-clippers',
          action :function () {
            if (megaClipperFlag 
              && funds >= megaClipperCost) 
                makeMegaClipper()
          },
          complete: function () {
            return false
          }
        }
      ]
    }
  }

  async nextEventLoop () {
    return new Promise(resolve => setTimeout(resolve, 0));
  }
  
  tryToMakeClip () {
    if (wire > 0) {
      clipClick(1)
    }
  }

  tryToSet(objectives) {
    if (objectives.length > 0) {
      const objective = objectives[0]
      objective.action()
      if (objective.complete()) objectives.shift()
    }
  }

  tryToEffectNextProject () {
    if (this.objectives.project.length > 0) {
      const project = this.objectives.project[0]
      if (project.trigger()
        && project.cost()
        && project.element
        && project.element.parentNode) {
          console.log('effecting', project.title)
          project.effect()
          this.objectives.project.shift()
      }
    }
  }

  tryToMakeNextImprovement () {
    if (trust > processors + memory) {
      if (this.objectives.compute.length > 0) {
        this.objectives.compute.shift()()
      } else { // TODO prioritize all improvements?
        if (Math.random() < 0.6) addProc(); else addMem()
      }
    }
  }

  tryToQuantumCompute () {
    const chipValues = qChips
      .filter(chip => chip.active)
      .map(chip => chip.value)
    if (chipValues.length > 0) {
      const averageChipValue = 
        chipValues.reduce((a,b) => a+b) / chipValues.length
      if (averageChipValue > 0) qComp()
    }
  }

  async phase1 () {
    console.log('initiating phase 1')
    while (1 == 1) {
      this.tryToSet(this.objectives.margin)
      this.tryToSet(this.objectives.marketing)
      this.tryToSet(this.objectives.wire)
      this.tryToMakeClip()
      this.tryToMakeNextImprovement()
      this.tryToEffectNextProject()
      this.tryToSet(this.objectives.automation)
      this.tryToQuantumCompute()
      if (hypnoDroneTextElement.innerHTML) {
        console.log('finished phase 1!')
        break
      }
      await this.nextEventLoop()
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
    setInterval(_ => {
      console.log('\ncurrent objectives:')
      Object.keys(this.objectives).forEach(key => {
        if (this.objectives[key].length > 0)
          console.log(key.padEnd(10), '->', 
            this.objectives[key][0].title 
            || this.objectives[key][0].name 
            || this.objectives[key][0].state
          )
        }
      )
    }, 10000)
  }

  launchWirePriceSampler () {
    setInterval(_ => {
      if (this.wirePrices.length === 10) this.wirePrices.shift()
      this.wirePrices.push(wireCost)
      this.averageWirePrice = 
        this.wirePrices.reduce((a, b) => a + b) / this.wirePrices.length
    }, 5000)
  }

  async launchStateMachine () {
    await this.phase1()
    this.done()
  }

  async exec () {
    this.launchStateLogger()
    this.launchWirePriceSampler()
    await this.launchStateMachine()
  }
}

const clippy = new Clippy()
clippy.exec()
  .then(_ => console.log('yay'))
  .catch(err => console.error(err))