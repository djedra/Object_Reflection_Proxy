import orderByProps from '../sort.js';
import destructuring from '../destructuring.js';


const obj = {
  name: 'Swordsman',
  type: 'Swordsman',
  health: 86,
  level: 5,
  attack: 40,
  defence: 10,
};


const character = {
  name: 'Magician',
  type: 'Magician',
  health: 100,
  level: 1,
  attack: 10,
  defence: 40,
  special: [
    {
      id: 8,
      name: 'Портал',
      icon: 'http://...',
      description: 'Возможность быстрого перемещения'
    },
    {
      id: 9,
      name: 'Ледяной удар',
      icon: 'http://...'
      // <- обратите внимание, описание "засекречено"
    }
  ]
}


test('sorted test', () => {
  const sorted = orderByProps(obj, ['name', 'level']);
  const correct = [
    {"key": "name", "value": "Swordsman"},
    {"key": "level", "value": 5},
    {"key": "attack", "value": 40},
    {"key": "defence", "value": 10},
    {"key": "health", "value": 86},
    {"key": "type", "value": "Swordsman"}
  ]

  expect(sorted).toEqual(correct);
});


test('destructuring test', () => {
  const destruct= destructuring(character);
  const correct = [
    {id: 8,
      name: 'Портал',
      icon: 'http://...',
      description: 'Возможность быстрого перемещения'
    },
    {id: 9,
      name: 'Ледяной удар',
      icon: 'http://...',
      description: 'Описание недоступно'
    }
  ]

  expect(destruct).toEqual(correct);
});