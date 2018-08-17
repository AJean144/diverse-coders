require 'test_helper'

class JobPostsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get job_posts_create_url
    assert_response :success
  end

end
