import styled from "@emotion/styled/macro";
import { TextField } from "@material-ui/core";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useAppDispatch } from "../../hooks";
import Button from "../../shared/Button";
import { dataReceived } from "./formSlice";

const Lines = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 1em;
`;

const Split = styled.div`
  display: flex;
  grid-gap: 1em;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Title = styled.h3``;

const P = styled.p`
  max-width: 650px;
`;

const validationSchema = yup.object({
  name: yup.string().required("Your name is required"),
  phone: yup.string().required("Phone number is required"),
  street: yup.string().required("Street address is required"),
  city: yup.string().required("City is required"),
  state: yup.string().required("State is required"),
  zip: yup
    .string()
    .test("len", "ZIP code is not valid", (val) => val?.length === 5)
    .required("ZIP code is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
});

export default function Form() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      street: "",
      city: "",
      state: "",
      zip: "",
      email: "",
    },
    validationSchema,
    onSubmit: ({ city, state, zip, ...rest }) => {
      dispatch(
        dataReceived({
          ...rest,
          cityStateZip: `${city}, ${state} ${zip}`,
        })
      );
      navigate("../download");
    },
  });

  return (
    <div>
      <Title>Order State Trail Pass</Title>

      <P>
        We understand the importance of your privacy. This information is not
        stored or transmitted, and is kept on your device.{" "}
        <strong>
          We never have access to the information you provide below.
        </strong>
      </P>

      <form onSubmit={formik.handleSubmit}>
        <Lines>
          <Split>
            <TextField
              fullWidth
              InputProps={{
                disableUnderline: !(formik.touched.name && formik.errors.name),
              }}
              variant="filled"
              label="Name"
              autoComplete="name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
            <TextField
              fullWidth
              InputProps={{
                disableUnderline: !(
                  formik.touched.phone && formik.errors.phone
                ),
              }}
              variant="filled"
              label="Phone"
              autoComplete="tel"
              type="tel"
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
            />
          </Split>
          <TextField
            fullWidth
            InputProps={{
              disableUnderline: !(
                formik.touched.street && formik.errors.street
              ),
            }}
            variant="filled"
            label="Street Address"
            autoComplete="street-address"
            name="street"
            value={formik.values.street}
            onChange={formik.handleChange}
            error={formik.touched.street && Boolean(formik.errors.street)}
            helperText={formik.touched.street && formik.errors.street}
          />
          <Split>
            <TextField
              fullWidth
              InputProps={{
                disableUnderline: !(formik.touched.city && formik.errors.city),
              }}
              variant="filled"
              label="City"
              autoComplete="address-level2"
              name="city"
              value={formik.values.city}
              onChange={formik.handleChange}
              error={formik.touched.city && Boolean(formik.errors.city)}
              helperText={formik.touched.city && formik.errors.city}
            />
            <TextField
              fullWidth
              InputProps={{
                disableUnderline: !(
                  formik.touched.state && formik.errors.state
                ),
              }}
              variant="filled"
              label="State"
              autoComplete="address-level1"
              name="state"
              value={formik.values.state}
              onChange={formik.handleChange}
              error={formik.touched.state && Boolean(formik.errors.state)}
              helperText={formik.touched.state && formik.errors.state}
            />
            <TextField
              fullWidth
              InputProps={{
                disableUnderline: !(formik.touched.zip && formik.errors.zip),
              }}
              variant="filled"
              label="ZIP Code"
              autoComplete="postal-code"
              name="zip"
              value={formik.values.zip}
              onChange={formik.handleChange}
              error={formik.touched.zip && Boolean(formik.errors.zip)}
              helperText={formik.touched.zip && formik.errors.zip}
            />
          </Split>
          <TextField
            fullWidth
            InputProps={{
              disableUnderline: !(formik.touched.email && formik.errors.email),
            }}
            variant="filled"
            label="Email"
            autoComplete="email"
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <Button type="submit" onSubmit={formik.submitForm}>
            Continue
          </Button>
        </Lines>
      </form>
    </div>
  );
}
