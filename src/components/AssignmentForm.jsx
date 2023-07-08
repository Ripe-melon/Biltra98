import { Button, Message, Field } from "../ui/index";

function AssignmentForm({
  loading,
  onSubmit,
  assignment,
  setAssignment,
  error,
}) {
  const onChange = (e) => {
    setAssignment({
      ...assignment,
      [e.target.name]: e.target.value,
    });
  };

  return (
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
        <Button loading={loading} type="submit">
          Save
        </Button>
      </div>
      <Message error={error} type="error" />
    </form>
  );
}

export default AssignmentForm;
