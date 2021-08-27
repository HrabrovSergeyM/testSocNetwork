import React from "react";
import { Link } from "react-router-dom";
import 'antd/dist/antd.css';
import { Layout, Menu, Avatar, Row, Col, Button } from 'antd';
import { UserOutlined} from '@ant-design/icons';
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUserLogin, selectIsAuth } from "../../redux/authSelectors";
import { logout } from "../../redux/authReducer";


export type MapPropsType = {
}



export const Header: React.FC<MapPropsType> = () => {

  const isAuth = useSelector(selectIsAuth)
  const login = useSelector(selectCurrentUserLogin)

  const dispatch = useDispatch()

  const logoutCallback = () => {
    dispatch(logout())
  }

  const {Header} = Layout

  return <Header className="header">
    <Row>
        <Col span={18}>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="1"><Link to="/developers">Developers</Link></Menu.Item>
            </Menu>
        </Col>

        {isAuth
            ?<> <Col span={1}>
                <Avatar alt={login || ''} style={{backgroundColor: '#87d068'}} icon={<UserOutlined/>}/>
            </Col>
                <Col span={5}>
                    <Button onClick={logoutCallback}>Log out</Button>
                </Col>
            </>
            : <Col span={6}>
                <Button>
                    <Link to={'/login'}>Login</Link>
                </Button>
            </Col>}

    </Row>
  </Header>
  }


