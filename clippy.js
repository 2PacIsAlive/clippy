class Clippy {
  constructor () {
    this.wirePrices = []
    this.state = 'initializing'
    this.objectives = {
      project: [
        project3,   // creativity
        project6,   // limerick
        project13,  // lexical processing
        project14,  // combinatory harmonics
        project15,  // hadwiger problem
        project11,  // new slogan
        project17,  // tóth sausage conjecture
        project19,  // donkey space
        project12,  // catchy jingle
        project50,  // quantum computing
        project51,  // photonic chip 1
        project51,  // photonic chip 2
        project51,  // photonic chip 3        
        project51,  // photonic chip 4
        project51,  // photonic chip 5
        project51,  // photonic chip 6
        project26,  // wire buyer
        project51,  // photonic chip 7
        project51,  // photonic chip 8
        project51,  // photonic chip 9
        project51,  // photonic chip 10
        project7,   // improved wire extrusion
        project8,   // optimized wire extrusion
        project9,   // microlattice shapecasting
        project10,  // spectral froth annealment
        project1,   // improved autoclickers
        project4,   // even better autoclickers
        project5,   // optimized autoclippers
        project16,  // hadwiger clip diagrams
        project20,  // strategic modeling
        project60,  // new strategy: a100
        project61,  // new strategy: b100
        project62,  // new strategy: greedy
        project63,  // new strategy: generous
        project64,  // new strategy: minimax
        project65,  // new strategy: tit for tat
        project66,  // new strategy: beat last
        project22,  // mega clippers
        project23,  // improved megaclickers
        project24,  // even better megaclickers
        project25,  // optimized megaclickers
        project34,  // hypno harmonics 
        project70,  // hypno drones
        project21,  // algorithmic trading TODO do we even need this?
        project27,  // coherent extrapolated volition
        project28,  // cure for cancer
        project29,  // world peace
        project30,  // global warming
        project31,  // male pattern baldness
        project119, // theory of mind
        project10b, // quantum foam annealment

      ],
      compute: [
        addProc, // 2 proc 1 mem
        addProc, // 3 proc 1 mem
        addProc, // 4 proc 1 mem
        addMem,  // 4 proc 2 mem
        addProc, // 5 proc 2 mem
        addMem,  // 5 proc 3 mem
        addMem,  // 5 proc 4 mem
        addMem,  // 5 proc 5 mem
        addMem,  // 5 proc 6 mem
        addMem,  // 5 proc 7 mem
        addMem,  // 5 proc 8 mem
        addMem,  // 5 proc 9 mem
        addMem,  // 5 proc 10 mem
        addProc, // 6 proc 10 mem
        addMem,
        addMem,
        addMem,
        addMem,
        addMem,
        addMem,
        addMem,
        addMem,
        addMem,
        addMem,
        addMem,
        addMem,
        addMem,
        addMem,        
      ],
      margin: [
        {
          state: 'getting off the ground',
          action: function () {
            if (margin > 0.05) lowerPrice()
          },
          complete: function () {
            return marketingLvl > 1
          }
        }, {
          state: 'tempering demand',
          action: function () {
            if (demand * 10 > 250) raisePrice()
          },
          complete: function () {
            return project12.flag
          }
        }, {
          state: 'burning initial inventory',
          action: function () {
            if (demand * 10 > 500) raisePrice() 
          },
          complete: function () {
            // TODO better completion method here?
            return clipmakerLevel >= 70
          }
        }, {
          state: 'prepping for hypno harmonics',
          action: function () {
            if (margin > 0.04) lowerPrice()
          },
          complete: function () {
            return project25.flag
          }
        }, {
          state: 'domination',
          action: function () {
            if (margin > 0.01) lowerPrice()
          },
          complete: function () {
            return false
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
            return project10.flag
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
      ],
      investments: [
        {
          state: 'saving money',
          action: function () {
            if (investmentEngineFlag
              && !btnImproveInvestments.disabled) {
                investUpgrade()
            }
          },
          complete: function () {
            return investLevel > 2
          }
        }, {
          state: 'easing into the markets',
          action: function () {
            investStratElement.value = 'low'
            if (unsoldClips > 1000000) investDeposit()
            if (unsoldClips == 0) investWithdraw()
            if (!btnImproveInvestments.disabled) investUpgrade()
          },
          complete: function () {
            return investLevel > 5
          }
        }, {
          state: 'all in',
          action: function () {
            investStratElement.value = 'hi'
            if (unsoldClips > 1000000) investDeposit()
            if (unsoldClips == 0) investWithdraw()
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

  tryToStrategyModel () {
    if (project20.flag) {
      const selectedStrat = strats.indexOf(strats[strats.length - 1])
      stratPickerElement.value = selectedStrat.toString()
      if (!btnNewTournamentElement.disabled) newTourney()
      if (!btnRunTournamentElement.disabled) runTourney()
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
      this.tryToStrategyModel()
      this.tryToSet(this.objectives.investments)
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
          console.log(key.padEnd(11), '->', 
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