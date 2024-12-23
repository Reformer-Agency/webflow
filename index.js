
<!-- Keep this css code to improve the font quality-->
<style>
  * {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -o-font-smoothing: antialiased;
}
</style>

<link rel="stylesheet" href="https://use.typekit.net/fvo3kej.css">

<!-- Memberstack webflow package -->
<script data-memberstack-app="app_clx9i1ss000010tv8ffxl9pox" src="https://static.memberstack.com/scripts/v1/memberstack.js" type="text/javascript"></script>

<!-- humblelytics -->
<script async src="https://app.humblytics.com/hmbl.min.js?id=e5abdd5"></script>


<!-- Google Search Console -->
<meta name="google-site-verification" content="sYLW5gdIR6fVxAKd8Mh23cQ416Ije09SFBFqRvoBC1U" />





<!-- Push Engage Platform Script -->
<script>
(function(w, d) {
  w.PushEngage = w.PushEngage || [];
  w._peq = w._peq || [];
  PushEngage.push(['init', {
      appId: '84c13e96-d19a-42e2-8144-2c4df1d3e6d7'
  }]);

  var e = d.createElement('script');

  e.src = 'https://clientcdn.pushengage.com/sdks/pushengage-web-sdk.js';
  e.async = true;
  e.type = 'text/javascript';
  d.head.appendChild(e);
})(window, document);
</script>




<!-- Don JR Tag -->



<script>
  const cleanQueryParams = () => {
    const url = new URL(window.location.href);
    if (url.pathname !== "/checkout") {
      url.searchParams.delete("plan-cost");
      history.replaceState({}, "", url);
      localStorage.removeItem("plan-cost");
    }
  };
  window.addEventListener("popstate", cleanQueryParams);
</script>


<!-- Don JR Tag End -->



<!-- Even Handler for Push Notifications -->

<!-- Push Engage Platform Script -->

<script>
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('https://www.piewire.live')
      .then(function(registration) {
        console.log('PushEngage service worker registered with scope:', registration.scope);
      })
      .catch(function(error) {
        console.error('PushEngage service worker registration failed:', error);
      });
  } else {
    console.warn('Service workers are not supported in this browser.');
  }
</script>


<!-- End of Push Engage Platform Script -->


<!-- this is something I found on the homepage of the website -->

<script>

const paymentButtons = document.querySelectorAll(".data-payment-class");

  // Function to update query parameters
  const updatePlanCost = (planCost, value) => {
    localStorage.setItem("plan-cost", planCost)
    localStorage.setItem("plan-value", value)
  };
  
  // Attach click event listeners to each button
  paymentButtons.forEach(button => {
    button.addEventListener("click", () => {
      const planCost = button.getAttribute("data-plan-cost");
      const planValue = button.getAttribute("plan-value");
	
      if (planCost) {
        updatePlanCost(planCost, planValue);
      }
    });
  });

</script>


<!-- this is something I found on the homepage of the website -->


<!-- this is something I found on the Pricing Page of the website -->

<!-- Count Up Interaction -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.0/jquery.waypoints.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/jquery.counterup@2.1.0/jquery.counterup.min.js"></script>

<script>
    jQuery(document).ready(function( $ ) {
          $('.counterup').counterUp({
          delay: 100, // the delay time in ms
          time: 2000 // the speed time in ms
    });
    });
</script>

<!-- this is something I found on the Pricing Page of the website -->

>