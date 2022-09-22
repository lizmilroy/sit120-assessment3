// SIT120 Assessment 3
// Elizabeth Milroy - s222075016
// main.js - Vue applications and components used in all pages. 

// Components 
// Component that holds the templated used to create a button that displays and hides an email address on click.
var showContact = {
    template: `<div class="nav-list-2">
    <Transition name="shown">
    <p v-if="!seen"> s222075016@deakin.edu.au </p>
    </Transition>
    <button @click="seen = !seen"><img src="../resources/icons/mail-icon.png" class="icon" alt="Email" style="max-width: 48px; max-height: 48px;"> </button>
    </div>`,
    data: function () {
        return {
            seen: true
        }
    }
};

// Component that holds the template used to create the navigation bar. Used to avoid repetition across pages.
var navigationBar = {
    template: `<div class="navigation-bar">
    <ul class="nav-list-1">
      <li><a href="index.html">Home</a></li>
      <li><a href="faq.html">FAQ</a></li>
      <li><a href="order.html">Order</a></li>
    </ul>
    
    <showcontact></showcontact>
    </div>`,
  components: {
    showcontact :showContact
  }
};

// Component that holds the template used to create the footer. Used to avoid repetition across pages.
var createFooter = {
    template: `<div class="footer-bar">
        <footer>
          <div class="social-media">
            <a href="https://twitter.com"><img src="../resources/icons/twitter-icon.png" class="icon" alt="Twitter" style="max-width: 48px; max-height: 48px;"></a>
            <a href="https://instagram.com"><img src="../resources/icons/instagram-icon.png" class="icon" alt="Instagram" style="max-width: 48px; max-height: 48px;"></a>
            <a href="https://facebook.com"><img src="../resources/icons/facebook-icon.png" class="icon" alt="Facebook" style="max-width: 48px; max-height: 48px;"></a>
          </div>
        </footer>
    </div>
    `
};

// Applications 
// Application that uses the 'navigationBar' component to display the navigation bar on page.
var navigation = new Vue ({
    el: ".navigation-app",
    components: {
        navigation : navigationBar
    }
});

// Application uses the 'createFooter' component to display the footer on page. 
var footerBar = new Vue ({
    el: ".footer-app",
    components: {
        footerbar : createFooter
    }
});