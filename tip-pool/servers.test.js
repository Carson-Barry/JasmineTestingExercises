describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it("should update serverTable when an update is submitted on updateServerTable", function() {
    submitServerInfo();
    updateServerTable();

    let serverTableTds = document.querySelectorAll('#serverTable tbody tr td');

    expect(serverTableTds[0].innerHTML).toEqual('Alice');
    expect(serverTableTds[1].innerHTML).toEqual('$0.00');

  });

  afterEach(function() {
    // teardown logic
    allServers = {};
    serverTbody.innerHTML="";
    serverId = 0;
  });
});
