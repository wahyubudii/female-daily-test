import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TopBrands from "@/components/TopBrands";

describe("TopBrand Components", () => {
  it("should render properly", () => {
    const brands = render(<TopBrands />);

    expect(brands).not.toBeNull();
  });

  it("get total length brands", () => {
    render(<TopBrands />);

    const brands = screen.getAllByTestId("brand-images");
    expect(brands).toHaveLength(6);
    expect(brands).not.toBeNull();
  });
});
