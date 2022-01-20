import { mocked } from "ts-jest/utils";
import AgifyResult from "../models/AgifyResult";
import * as agify from "./agify";
import axiosCached from "./axiosCached";

jest.mock("./axiosCached");

const mockedAxiosCache = mocked(axiosCached, true);

describe("estimateAges", () => {
  test("properly forms url", async () => {
    const mockedValue: AgifyResult[] = [
      {
        name: "foo",
        age: 23,
        count: 400,
      },
      {
        name: "bar",
        age: 33,
        count: 500,
      },
      {
        name: "baz",
        age: 39,
        count: 33,
      },
    ];

    mockedAxiosCache.get.mockResolvedValue({
      data: mockedValue,
    });

    const result = await agify.estimateAges(["foo", "bar", "baz"]);

    expect(mockedAxiosCache.get).toHaveBeenCalledWith(
      "https://api.agify.io?name[]=foo&name[]=bar&name[]=baz"
    );

    expect(result).toStrictEqual([
      {
        name: "foo",
        age: 23,
        count: 400,
      },
      {
        name: "bar",
        age: 33,
        count: 500,
      },
      {
        name: "baz",
        age: 39,
        count: 33,
      },
    ]);
  });
});
