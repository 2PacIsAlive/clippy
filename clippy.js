class Clippy {
  constructor () {
    this.objectives = {
      project: [
        // phase 1
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
        project7,   // improved wire extrusion
        project8,   // optimized wire extrusion
        project9,   // microlattice shapecasting
        project10,  // spectral froth annealment
        project51,  // photonic chip 5
        project51,  // photonic chip 6
        project26,  // wire buyer
        project51,  // photonic chip 7
        project1,   // improved autoclickers
        project4,   // even better autoclickers
        project5,   // optimized autoclippers
        project16,  // hadwiger clip diagrams
        project51,  // photonic chip 8
        project51,  // photonic chip 9
        project51,  // photonic chip 10
        project20,  // strategic modeling
        project60,  // new strategy: a100
        project61,  // new strategy: b100
        project62,  // new strategy: greedy
        project21,  // algorithmic trading
        project63,  // new strategy: generous
        project64,  // new strategy: minimax
        project65,  // new strategy: tit for tat
        project66,  // new strategy: beat last
        project22,  // mega clippers
        project23,  // improved megaclippers
        project24,  // even better megaclippers
        project25,  // optimized megaclippers
        project34,  // hypno harmonics
        project70,  // hypno drones
        project27,  // coherent extrapolated volition
        project28,  // cure for cancer
        project29,  // world peace
        project30,  // global warming
        project31,  // male pattern baldness
        project119, // theory of mind
        project10b, // quantum foam annealment
        project37,  // hostile takeover
        project38,  // full monopoly
        project40,  // a token of goodwill 500,000
        project40b, // a token of goodwill 1,000,000
        project40b, // a token of goodwill 
        project40b, // a token of goodwill
        project40b, // a token of goodwill
        project40b, // a token of goodwill
        project40b, // a token of goodwill
        project40b, // a token of goodwill
        project40b, // a token of goodwill 
        project40b, // a token of goodwill 256,000,000
        project40b, // a token of goodwill 512,000,000 
        // will only have 101,000,000 clips for phase 2 if we use this
        // last token of goodwill, it will be faster but more complicated
        // since we would have to buy a harvester drone, dismantle it,
        // and then buy a wire drone
        project35,  // release the hypno drones
        // phase 2
        project18,  // toth tubule enfolding
        project127, // power grid
        project41,  // nanoscale wire production
        project43,  // harvester drones
        project44,  // wire drones
        project45,  // clip factories

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
          action: () => this.setPrice(0.02, 0.04),
          complete: function () {
            return marketingLvl > 1
          }
        }, {
          state: 'tempering demand',
          action: () => this.setPrice(0.03, 0.06),
          complete: function () {
            return project12.flag
          }
        }, {
          state: 'burning initial inventory',
          action: () => this.setPrice(0.08, 0.12),
          complete: function () {
            // TODO better completion method here?
            return clipmakerLevel >= 70
          }
        }, {
          state: 'prepping for hypno harmonics',
          action: () => this.setPrice(0.09, 0.14),
          complete: function () {
            return project25.flag
          }
        }, {
          state: 'domination',
          action: () => this.setPrice(0.12, 0.34),
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
        }, {
          state: 'campaigning tough',
          action: function () {
            if (funds >= adCost * 2) buyAds()
          },
          complete: function () {
            return marketingLvl > 5
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
                && wire < 3000) {
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
            if (funds >= clipperCost * 2) makeClipper()
          },
          complete: function () {
            return clipmakerLevel >= 75
          }
        }, {
          state: 'buying hella mega-clippers',
          action: function () {
            if (megaClipperFlag 
              && funds >= megaClipperCost * 2) 
                makeMegaClipper()
          },
          complete: function () {
            return megaClipperLevel >= 150
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
            return investLevel > 4
          }
        }, {
          state: 'easing into the markets',
          action: function () {
            investStratElement.value = 'low'
            if (unsoldClips > 1000000 
              && bankroll < 1000) investDeposit()
            if (unsoldClips == 0) investWithdraw()
            if (!btnImproveInvestments.disabled) investUpgrade()
          },
          complete: function () {
            return investLevel > 8
          }
        }, {
          state: 'all in',
          action: function () {
            investStratElement.value = 'hi'
            if (unsoldClips > 1000000 &&
              portTotal < 3000000) investDeposit()
            if (unsoldClips == 0) investWithdraw()
          },
          complete: function () {
            return portTotal >= 1500000000
          }
        }, {
          state: 'cash out',
          action: function () {
            investWithdraw()
          },
          complete: function () {
            return funds > 100000000000
          }
        }
      ]
    }
    this.wirePrices = []
    this.inventorySamples = []
    this.inventoryState = 'stable'
  }

  setPrice (low, high) {
    switch(this.inventoryState) {
      case 'increasing':
        if (margin > low) lowerPrice()
        break
      case 'decreasing':
        if (margin < high) raisePrice()
        break
    }
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

  launchStateLogger () {
    return setInterval(_ => {
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
    }, 30000)
  }

  launchWirePriceSampler () {
    return setInterval(_ => {
      if (this.wirePrices.length === 10) this.wirePrices.shift()
      this.wirePrices.push(wireCost)
      this.averageWirePrice = 
        this.wirePrices.reduce((a, b) => a + b) / this.wirePrices.length
    }, 5000)
  }

  launchInventoryMonitor () {
    return setInterval(_ => {
      this.inventorySamples.push(unsoldClips)
      if (this.inventorySamples.length === 3) {
        this.inventorySamples.shift()
        if (this.inventorySamples[0] > this.inventorySamples[1])
          this.inventoryState = 'decreasing'
        else if (this.inventorySamples[0] < this.inventorySamples[1])
          this.inventoryState = 'increasing'
        else this.inventoryState = 'stable'
      }

    }, 500)
  }

  phase1 () {
    return {
      objectives: () => {
        this.tryToQuantumCompute()
        this.tryToSet(this.objectives.margin)
        this.tryToSet(this.objectives.marketing)
        this.tryToSet(this.objectives.wire)
        this.tryToMakeClip()
        this.tryToMakeNextImprovement()
        this.tryToEffectNextProject()
        this.tryToSet(this.objectives.automation)
        this.tryToStrategyModel()
        this.tryToSet(this.objectives.investments)
      },
      complete: function () {
        return project35.flag
      }
    }
  }

  phase2 () {
    return {
      objectives: () => {
        this.tryToQuantumCompute()
        this.tryToEffectNextProject()
      },
      complete: function () {
        return project46.flag
      }
    }
  }

  async stateMachine () {
    await this.playGame(this.phase1())
    await this.playGame(this.phase2())
  }

  async nextEventLoop () {
    return new Promise(resolve => setTimeout(resolve, 0));
  }

  async playGame (stage) {
    while (1 == 1) {
      stage.objectives()
      await this.nextEventLoop()
      if (stage.complete()) break
    }
  }

  async exec () {
    const intervals = {
      stateLogger: this.launchStateLogger(),
      wirePriceSampler: this.launchWirePriceSampler(),
      inventoryMonitor: this.launchInventoryMonitor()
    }
    await this.stateMachine()
    intervals.forEach(clearInterval)
  }
}

const clippy = new Clippy()
clippy.exec()
  .then(_ => console.log('nice clippin w u'))
  .catch(err => console.error(err))