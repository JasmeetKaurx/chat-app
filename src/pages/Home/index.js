import React from "react";
import { Grid, Row, Col } from "rsuite";
import Sidebar from "../../components/Sidebar";
import "../../styles/DrawerStyle.scss";
import { RoomsProvider } from "../../context/roomsContext";
import Chat from "./Chat";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { useMediaQuery } from "../../misc/custom-hooks";

function Home() {
  const isDesktop = useMediaQuery("(min-width : 992px )");
  console.log(isDesktop);
  const { isExact } = useRouteMatch();

  const canRenderSidebar = isDesktop || isExact;

  return (
    <RoomsProvider>
      <Grid fluid className="h-100">
        <Row className="h-100">
          {canRenderSidebar && (
            <Col xs={24} md={8} className="h-100">
              <Sidebar />
            </Col>
          )}

          <Switch>
            <Route path="/chat/:chatId">
              <Col xs={24} md={16} className="h-100">
                <Chat />
              </Col>
            </Route>
            <Route>
              <h5 className="text-center text-black-70 mt-page">
                Please select any room
              </h5>
            </Route>
          </Switch>
        </Row>
      </Grid>
    </RoomsProvider>
  );
}

export default Home;
