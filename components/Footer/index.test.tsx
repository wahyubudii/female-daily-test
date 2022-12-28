import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "@/components/Footer";

describe("Footer Components", () => {
  it("should render properly", () => {
    const footer = render(<Footer />);

    expect(footer).not.toBeNull();
  });

  it("get total link items on footer", () => {
    render(<Footer />);

    const linkLength = screen.getAllByRole("link");

    expect(linkLength).toHaveLength(15);
  });

  // Mobile - Store
  it("should direct to female appstore after clicked", () => {
    render(<Footer />);

    const appstore = screen.getAllByTestId("mobile-store");

    expect(appstore[0]).toHaveAttribute(
      "href",
      "https://apps.apple.com/id/app/female-daily-beauty-review/id1160742672?l=id"
    );
  });

  it("should direct to female playstore after clicked", () => {
    render(<Footer />);

    const playstore = screen.getAllByTestId("mobile-store");

    expect(playstore[1]).toHaveAttribute(
      "href",
      "https://play.google.com/store/apps/details?id=com.fdbr.android&hl=en_GB"
    );
  });

  // Social Media
  it("should direct to facebook after clicked", () => {
    render(<Footer />);

    const facebook = screen.getAllByTestId("social-media");

    expect(facebook[0]).toHaveAttribute(
      "href",
      "https://www.facebook.com/FemaleDailyNetwork/"
    );
  });

  it("should direct to twitter after clicked", () => {
    render(<Footer />);

    const twitter = screen.getAllByTestId("social-media");

    expect(twitter[1]).toHaveAttribute(
      "href",
      "https://twitter.com/femaledaily"
    );
  });

  it("should direct to instagram after clicked", () => {
    render(<Footer />);

    const instagram = screen.getAllByTestId("social-media");

    expect(instagram[2]).toHaveAttribute(
      "href",
      "https://www.instagram.com/femaledailynetwork/"
    );
  });

  it("should direct to youtube after clicked", () => {
    render(<Footer />);

    const youtube = screen.getAllByTestId("social-media");

    expect(youtube[3]).toHaveAttribute(
      "href",
      "https://www.youtube.com/user/FemaleDailyNetwork"
    );
  });
});
