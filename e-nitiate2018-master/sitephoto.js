  function changeImage() {

        if (document.getElementById("imgClickAndChange").src == "https://images.unsplash.com/photo-1495987976467-244d20b4b39a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6f24b7bb2e1eee6c2e11da98e781b7d6&auto=format&fit=crop&w=500&q=60") 
        {
            document.getElementById("imgClickAndChange").src = "https://images.unsplash.com/photo-1488401962641-ff6be4bb26ef?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8db21c6de56e5be790c707d7f4cfdb6d&auto=format&fit=crop&w=500&q=60";
        }
        else 
        {
            document.getElementById("imgClickAndChange").src = "https://images.unsplash.com/photo-1523528283115-9bf9b1699245?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=84c70b953a2d26b484e3a920f0a31f37&auto=format&fit=crop&w=500&q=60";
        }
    }