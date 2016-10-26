// Mocha & Chai Test Suite (for Tuesday's assignment)
var expect = chai.expect;

describe('MoDom', function() {
  describe('md Global Variable', function() {
    it('should exist', function() {
      expect(md).to.exist
    })
  })
  describe('md.one()', function() {
    it('should return one thing', function() {
      expect(typeof md.one('div')).to.be.equal('object')
    })
  })
  describe('md.all()', function() {
    it('should return all tags put in all()', function() {
      expect(md.all('div').length).to.be.equal(14)
    })
  })
  describe('md.remove()', function() {
    it('should remove the element', function() {
      md.remove('.main > h1')
      expect(md.one('.main > h1')).to.be.equal(null)
    })
  })
  describe('md.addClass()', function() {
    it('should add a CSS class', function() {
      md.addClass('body', 'test')
      expect(document.body.classList.contains('test')).to.be.true
    })
  })
  describe('md.removeClass()', function() {
    it('should remove a CSS class', function() {
      md.removeClass('body', 'test')
      expect(document.body.classList.contains('test')).to.be.false
    })
  })
  describe('md.hasClass()', function() {
    it('should check if the element has the specified CSS class', function() {
      expect(md.hasClass('body','test')).to.be.false
    })
  })
  describe('md.getAttr()', function() {
    it('should get the attribute of the element', function() {
      expect(md.getAttr('nav', 'class')).to.contain('navbar')
    })
  })
  describe('md.setAttr()', function() {
    it('should check the attribute of the element', function() {
      md.setAttr('nav','class','test')
      expect(md.getAttr('nav', 'class')).to.contain('test')
    })
  })
  describe('md.getHTML()', function() {
    it('should get the innerHTML of the element', function() {
      expect(md.getHTML('.active')).to.contain('Overview')
    })
  })
  describe('md.setHTML()', function() {
    it('should get the innerHTML of the element', function() {
      md.setHTML('.active','my overview')
      expect(md.getHTML('.active')).to.contain('my overview')
    })
  })
  describe('md.flipPage()', function() {
    it('should flip the page upside down', function() {
        md.flipPage('body','rotate(180deg)')
        expect(document.body.style.transform).to.equal('rotate(180deg)')
        md.flipPage('body','rotate(0deg)')

    })
  })
  describe('md.ajax()', function (){
    it('should return the data from API', function(done){
      md.ajax('http://swapi.co/api/people/1', function(){
        done()
      })
    })
  })
  describe('md.getProp()', function(){
    it('should return the property of the element', function(){
      expect(md.getProp('#navbar', 'value')).to.equal(undefined)
    })
  })
  describe('md.setProp()', function(){
    it('should set the property of the element', function(){
      md.setProp('#navbar','value','true')
      expect(md.getProp('#navbar', 'value')).to.contain('true')
    })
  })
  describe('md.getValue()', function(){
    it('should return the value of element', function(){
      expect(md.getValue('body','classNames')).to.be.true
    })
  })
})
