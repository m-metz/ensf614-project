import React from "react";
import { getFetch } from "../fetch";
function VerifyVoucher() {
  let voucher = "";
  let voucherForm = document.getElementById("voucherForm");
  function validateVoucher() {
    voucher = voucherForm.voucher.value;
    console.log("validate" + voucher);
  }
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        id="voucherForm"
      >
        <label>Enter voucher info (optional):</label>
        <input
          type="text"
          id="voucher"
          name="voucher"
        ></input>

        <button
          className="btn"
          onClick={validateVoucher}
        >
          Validate code
        </button>
      </form>
    </div>
  );
}

export default VerifyVoucher;
