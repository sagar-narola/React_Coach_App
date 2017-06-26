require 'test_helper'

class LandingPageControllerTest < ActionDispatch::IntegrationTest
  test "should get landing_page_1" do
    get landing_page_landing_page_1_url
    assert_response :success
  end

  test "should get landing_page_2" do
    get landing_page_landing_page_2_url
    assert_response :success
  end

end
