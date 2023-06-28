import { useState } from "react";

function AssignmentForm(props) {
  return (
    <>
      <div>
        <button onClick={modalShow.bind(this, true)}>
          Lägg till ny bokning
        </button>
      </div>

      <Modal
        title="Lägg till ny bokning!"
        show={isModal}
        close={modalShow.bind(this, false)}
      >
        <form onSubmit={onSubmit}>
          <Field labelText="Företag" id="company-name">
            <input
              type="text"
              value={assignment.companyName}
              onChange={onChange}
              name="companyName"
              id="company-name"
            />
          </Field>

          <Field labelText="Kontaktperson" id="company-contact">
            <input
              type="text"
              value={assignment.companyContact}
              onChange={onChange}
              name="companyContact"
              id="contact-contact"
            />
          </Field>

          <Field labelText="Telefonnummer" id="company-phone">
            <input
              type="text"
              value={assignment.companyPhone}
              onChange={onChange}
              name="companyPhone"
              id="company-phone"
            />
          </Field>

          <Field labelText="Upphämtning" id="pickup-adress">
            <input
              type="text"
              value={assignment.pickupAdress}
              onChange={onChange}
              name="pickupAdress"
              id="pickup-adress"
            />
          </Field>

          <Field labelText="Avlämningsadress" id="dropoff-adress">
            <input
              type="text"
              value={assignment.dropoffAdress}
              onChange={onChange}
              name="dropoffAdress"
              id="dropoff-adress"
            />
          </Field>

          <Field labelText="Datum" id="date-pickup">
            <input
              type="date"
              value={assignment.pickupDate}
              onChange={onChange}
              name="pickupDate"
              id="date-pickup"
            />
          </Field>

          <Field labelText="Reg-nummer" id="car-reg">
            <input
              type="text"
              value={assignment.carReg}
              onChange={onChange}
              name="carReg"
              id="car-reg"
            />
          </Field>

          <div>
            <Button loading={loading} label="Save" type="submit" />
          </div>
          <Message error={error} type="error" />
        </form>
      </Modal>
    </>
  );
}

export default AssignmentForm;
