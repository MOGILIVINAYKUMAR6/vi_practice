document.getElementById('quoteForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const quote = document.getElementById('quote').value;
  const author = document.getElementById('author').value;
  
  // Add quote to list
  addQuote(quote, author);

  // Clear input fields
  document.getElementById('quote').value = '';
  document.getElementById('author').value = '';
});

function addQuote(quote, author) {
  const quoteList = document.getElementById('quoteList');
  const newQuote = document.createElement('div');
  newQuote.classList.add('card', 'my-2');

  const quoteHTML = `
    <div class="card-body">
      <blockquote class="blockquote">
        <p class="mb-0">${quote}</p>
        <footer class="blockquote-footer">${author}</footer>
      </blockquote>
    </div>
  `;
  newQuote.innerHTML = quoteHTML;

  quoteList.appendChild(newQuote);
}
