//your JS code here. If required.
 document.getElementById('submit').addEventListener('click', function() {
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const confirmPassword = document.getElementById('confirm-password').value;

      if (password === confirmPassword) {
        const userData = {
          name: name,
          email: email,
          password: password
        };

        // Store data in session storage
        sessionStorage.setItem('user', JSON.stringify(userData));

        // Show success message
        alert('Sign up successful!');
      } else {
        // Show error message
        alert('Passwords do not match');
      }
    });
  