import { DiceRoller, exportFormats } from "rpg-dice-roller"

/**
 * GetStatRolls expects no arguments
 * Returns 6 rolled sets of 4d6 dropping the lowest value
 * This represents all 6 stats
 */
export const GetStatRolls = () => {
  const roller = new DiceRoller()
  roller.roll("4d6d1") // stat 1
  roller.roll("4d6d1") // stat 2
  roller.roll("4d6d1") // stat 3
  roller.roll("4d6d1") // stat 4
  roller.roll("4d6d1") // stat 5
  roller.roll("4d6d1") // stat 6
  const jsonData = roller.export(exportFormats.OBJECT)
  return jsonData
}
