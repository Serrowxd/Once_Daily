const listItems = [
  'Orange',
  'Banana',
  'Strawberry',
  'Apple',
  'Mango',
  'Pineapple',
  'Blueberry'
]

function createItems(items) {
  items.forEach(item => {
    $('#items').append(`
      <div class="fruit">
        <p> ${item} </p>
      </div>
    `)
  })
};

$(document).ready(createItems(listItems))