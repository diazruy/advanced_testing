class window.Widget
  constructor: (el) ->
    @$el = $(el)
    @$el.click(@changeColor)

  changeColor: =>
    r = @randomColor()
    g = @randomColor()
    b = @randomColor()
    @$el.css('color','rgb('+r+','+g+','+b+')')

  randomColor: ->
    Math.floor(Math.random() * 255)
