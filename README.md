# Shopping Cart Vanilla Javascript with ES6

So, this is a Shoping cart with some ES6 Feature

## Getting Started

I use some ES6 syntax like class.

### And coding style tests

For styling i use Bulma Framework

## Acknowledgments

* Thanks To God
* Inspiration
* etc


## Update code for mobile view

HTML

```
 <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <h1 class="title" style="color: #fff;">Nasi Tempik</h1>
        </a>
    
        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
    
      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item">
            Home
          </a>
    
          <a class="navbar-item">
            Cart
          </a>
    
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              Menu
            </a>
    
            <div class="navbar-dropdown">
              <a class="navbar-item">
                Nasi Goreng
              </a>
              <a class="navbar-item">
                Nasi Bakar
              </a>
              <a class="navbar-item">
                Nasi Kucing
              </a>
            </div>
          </div>
        </div>
    </nav>

```

Javascript

```
const burger = document.querySelector(".burger");

burger.addEventListener("click", () => {
  document.querySelector(".navbar-menu").classList.toggle("is-active");
});

```
