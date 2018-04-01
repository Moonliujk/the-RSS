//TODO: 写一个叫做 "The menu" 的测试用例
describe('The menu', function() {

    /* TODO:
     * 写一个测试用例保证菜单元素默认是隐藏的。你需要分析 html 和 css
     * 来搞清楚我们是怎么实现隐藏/展示菜单元素的。
     */

     it('are hidden defaultly', function() {
         var bodyClassName = $('body').className;

         expect(bodyClassName).toBe('menu-hidden');
     });


     /* TODO:
      * 写一个测试用例保证当菜单图标被点击的时候菜单会切换可见状态。这个
      * 测试应该包含两个 expectation ： 党点击图标的时候菜单是否显示，
      * 再次点击的时候是否隐藏。
      */

      describe('when menuicon clicked, ', function() {
          var isMenuShow = false;
          var bodyClassName = $('body').className;
          spyEvent = spyOnEvent('.feed-list', 'click');

          if (spyEvent) {
              $('.feed-list').trigger('click');
              isMenuShow = !isMenuShow;
          }

          if (isMenuShow) {
              it('the menu will be shown at first clicked', function() {
                  expect(bodyClassName).toBe('');
              });
          } else {
              it('the menu will be hidden at first clicked', function() {
                  expect(bodyClassName).toBe('menu-hidden');
              });
          }
      });
});
