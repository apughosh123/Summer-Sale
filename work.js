function applyCoupon() {
    var enteredCoupon = document.getElementById('couponInput').value;
    var validCoupon = 'SAVE20';
    var totalPrice = 100; 
  
    if (enteredCoupon === validCoupon) {
      var discount = totalPrice * 0.2; 
      var discountedPrice = totalPrice - discount;
      
      document.getElementById('message').innerText = 'Coupon applied successfully! You get a 20% discount.';
      document.getElementById('totalPrice').innerText = discountedPrice;
    } else {
      document.getElementById('message').innerText = 'Invalid coupon code. Please try again.';
    }
  }
  
  