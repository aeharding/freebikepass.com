import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore } from "../../store";
import Age, { getFirstName } from "./Age";
import * as agifyService from "../../services/agify";

describe("getFirstName", () => {
  test("gets from full name", () => {
    expect(getFirstName('Eddard "Ned" Stark')).toBe("Eddard");
  });

  test("gets from single name", () => {
    expect(getFirstName("Eddard")).toBe("Eddard");
  });
});

describe("<Age />", () => {
  test("requests ages", async () => {
    const store = createStore();

    const successSpy = await jest
      .spyOn(agifyService, "estimateAges")
      .mockImplementation(async () => {
        return [
          {
            name: "Eddard",
            age: 34,
            count: 0,
          },
          {
            name: "Fiona",
            age: 22,
            count: 0,
          },
        ];
      });

    render(
      <Provider store={store}>
        <Age name="Eddard Blahblah" />
        <Age name="Fiona" />
      </Provider>
    );

    await new Promise((r) => setTimeout(r, 30));

    expect(successSpy).toHaveBeenCalledWith(["Eddard", "Fiona"]);
  });
});
