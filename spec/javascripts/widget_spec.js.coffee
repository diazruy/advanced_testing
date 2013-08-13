#= require 'widget'

describe 'Widget', ->
  it "changes the color of the div on click", ->
    $container = $("<div/>")
    widget = new Widget($container)
    $container.click();
    expect($container.css('color')).toNotBe('')
