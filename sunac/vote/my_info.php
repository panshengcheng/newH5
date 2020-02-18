<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title></title>
  <?php
  include_once "res.php";
  ?>
</head>

<body>
  <input type="text" id="player_id" hidden value="<?php echo $_GET["id"]; ?>">
  <div class="box">
    <div class="container">
      <div class="row">
        <div class="col-12 no-padding">
          <div class="card">
            <img src="" alt="" class="card-img-top" id="headimg">
            <div class="card-body bg-white text-gray">
              <blockquote class="blockquote text-left">
                <p class="mb-0" id="message"></p>
                <footer class="blockquote-footer text-right" id="name"></footer>
              </blockquote>
              <button class="btn btn-primary btn-block"" id="star"> </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <a class=" text-primary" id="back" routerLink="/ranking">
    <i class="fa fa-arrow-left">返回</i>
  </a>
  <?php include_once "wechat.php"; ?>
  <?php include "footer.php"; ?>
</body>

</html>