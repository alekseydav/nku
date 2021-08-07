<footer class="footer">
    <div class="container">
        <a class="company" href="/">NKU</a>
        <a class="phone" href="tel:+79164441159">+7-916-444-11-59</a>
    </div>
</footer>

<style>
.footer {
  padding: 2px 0;
  background-color: #026aa7;
  justify-content: center;
}

.container {
  justify-content: space-between;
  align-items: center;
  width: 1120px;
  padding: 0 10px;
}

.company {
  color: #fff;
  font-size: 3rem;
  text-decoration: none;
}

.company:hover {
  color: #fff;
  text-decoration: none;
}

.phone {
  color: #fff;
  font-size: 1.75rem;
  margin-left: 40px;
  text-decoration: none;
}

@media (max-width: 576px) {
  .container {
    flex-direction: column;
  }

  .phone {
    margin-left: 0;
    margin-top: 10px;
  }
}
</style>