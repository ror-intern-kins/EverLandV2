require 'test_helper'

class PostsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @post = posts(:one)
  end

  test "should get index" do
    get posts_url
    assert_response :success
  end

  test "should get new" do
    get new_post_url
    assert_response :success
  end

  test "should create post" do
    assert_difference('Post.count') do
      post posts_url, params: { post: { address_number: @post.address_number, area: @post.area, balcony_direction: @post.balcony_direction, bedroom: @post.bedroom, contact_address: @post.contact_address, contact_mail: @post.contact_mail, contact_mobile: @post.contact_mobile, contact_name: @post.contact_name, contact_phone: @post.contact_phone, description: @post.description, entrance: @post.entrance, floor: @post.floor, front: @post.front, furniture: @post.furniture, house_direction: @post.house_direction, lat: @post.lat, lng: @post.lng, price: @post.price, project: @post.project, title: @post.title, toilet: @post.toilet, unit: @post.unit } }
    end

    assert_redirected_to post_url(Post.last)
  end

  test "should show post" do
    get post_url(@post)
    assert_response :success
  end

  test "should get edit" do
    get edit_post_url(@post)
    assert_response :success
  end

  test "should update post" do
    patch post_url(@post), params: { post: { address_number: @post.address_number, area: @post.area, balcony_direction: @post.balcony_direction, bedroom: @post.bedroom, contact_address: @post.contact_address, contact_mail: @post.contact_mail, contact_mobile: @post.contact_mobile, contact_name: @post.contact_name, contact_phone: @post.contact_phone, description: @post.description, entrance: @post.entrance, floor: @post.floor, front: @post.front, furniture: @post.furniture, house_direction: @post.house_direction, lat: @post.lat, lng: @post.lng, price: @post.price, project: @post.project, title: @post.title, toilet: @post.toilet, unit: @post.unit } }
    assert_redirected_to post_url(@post)
  end

  test "should destroy post" do
    assert_difference('Post.count', -1) do
      delete post_url(@post)
    end

    assert_redirected_to posts_url
  end
end
