<template>
  <form>
    <div class="row">
      <div class="col-50">
        <h3>Personal info</h3>
        <label for="fname"><i class="fa fa-user"></i> Full Name</label>
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="Your Name"
        />

        <label for="email"><i class="fa fa-envelope"></i> Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="test@example.com"
        />

        <label for="pnumber"
          ><i class="fa fa-phone"></i> Phone Number(Mobile)</label
        >
        <input
          type="text"
          id="pnumber"
          name="pnumber"
          placeholder="5xx-xx-xx-xx"
        />
      </div>

      <div class="col-50">
        <h3>Booking info</h3>
        <label for="adr"><i class="fa fa-address-card"></i> Address</label>
        <select id="adr" name="address">
          <option value="542 W. 15th Street">542 W. 15th Street</option>
          <option value="542 W. 15th Street">542 W. 15th Street</option>
          <option value="542 W. 15th Street">542 W. 15th Street</option>
          <option value="542 W. 15th Street">542 W. 15th Street</option>
        </select>

        <label for="quantity"
          ><i class="fa-solid fa-people-group"></i> Quantity (between 1 and
          50)</label
        >
        <input
          type="number"
          id="quantity"
          name="quantity"
          placeholder="2"
          min="1"
          max="50"
        />

        <div class="row">
          <div class="col-50">
            <label for="date"
              ><i class="fa-solid fa-calendar-days"></i> Date</label
            >
            <input type="date" id="date" name="date" min="2022-01-02" />
          </div>

          <div class="col-50">
            <label for="appt"><i class="fa-solid fa-clock"></i> Time</label>
            <input type="time" id="appt" name="appt" />
          </div>
        </div>
      </div>
    </div>

    <label for="comment">Comment</label>
    <textarea name="comment" id="comment" cols="30" rows="10" placeholder="Add comment ..."></textarea>

    <input type="submit" value="Submit" class="btn" />
  </form>
</template>

<script>
export default {};
</script>

<style scoped>
form {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  width: 50%;
  color: white;
  background-color: #202020;
  padding: 5px 20px 15px 20px;
  border: 1px solid yellow;
  border-radius: 3px;
}

.row {
  display: -ms-flexbox; /* IE10 */
  display: flex;
  gap: 1rem;
}

.col-50 {
  -ms-flex: 50%; /* IE10 */
  flex: 50%;
}

h3 {
  color: yellow;
}

input,
select {
  width: 100%;
  margin-bottom: 20px;
  padding: 12px;
  border-radius: 3px;
  background-color: white;
}

label {
  margin-bottom: 10px;
  display: block;
}

textarea {
  width: 100%;
}

.btn {
  background-color: black;
  color: yellow;
  padding: 12px;
  margin: 10px 0;
  border: none;
  width: 100%;
  border-radius: 3px;
  cursor: pointer;
  font-size: 17px;
}

.btn:hover {
  box-shadow: 0 0 10px yellow;
}


@media screen and (max-width: 1100px) {
  form{
    width: 100%;
  }
}

@media (max-width: 800px) {
  .row {
    flex-direction: column;
  }
  .col-25 {
    margin-bottom: 20px;
  }
}
</style>