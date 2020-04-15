<div id="account_sign_in_phone">
  <div class="form-group form-row align-items-center">
    <div class="col-auto col-sm-2">
      <label class="mb-1 d-inline-block min-w-100 text-align-last" for="signIn_phone">手机号</label>
    </div>
    <div class="col-12 col-sm-10 input-group">
      <div class="input-group-prepend">
        <div class="input-group-text dropdown-toggle" data-toggle="dropdown" id="phone_area">+86</div>
        <div class="dropdown-menu min-w-rem-2 text-center">
          <div class="btn-group-vertical btn-group-toggle" data-toggle="buttons">
            <label class="min-w-rem-2 border-0 rounded-0 btn btn-outline-secondary" for="phone_area_111">+111<input
                type="radio" id="phone_area_111" value="111"></label>
            <label class="min-w-rem-2 border-0 rounded-0 btn btn-outline-secondary" for="phone_area_222">+222<input
                type="radio" id="phone_area_222" value="222"></label>
            <label class="min-w-rem-2 border-0 rounded-0 btn btn-outline-secondary" for="phone_area_333">+333<input
                type="radio" id="phone_area_333" value="333"></label>
            <label class="min-w-rem-2 border-0 rounded-0 btn btn-outline-secondary" for="phone_area_444">+444<input
                type="radio" id="phone_area_444" value="444"></label>
            <label class="min-w-rem-2 border-0 rounded-0 btn btn-outline-secondary" for="phone_area_555">+555<input
                type="radio" id="phone_area_555" value="555"></label>
            <label class="min-w-rem-2 border-0 rounded-0 btn btn-outline-secondary" for="phone_area_666">+666<input
                type="radio" id="phone_area_666" value="666"></label>
          </div>
        </div>
      </div>
      <input class="form-control" type="text" id="signIn_phone" placeholder="手机号码" minlength="11" maxlength="11"
             autocomplete="off" required>
    </div>
  </div>
  <div class="d-flex justify-content-center">
    <button class="btn btn-secondary" type="button" id="sign_in_phone_submit">登录</button>
  </div>
</div>
