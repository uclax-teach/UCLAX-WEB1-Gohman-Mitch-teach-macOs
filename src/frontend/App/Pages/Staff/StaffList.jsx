import { useState, useEffect } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

// fetch
import axios from "@App/Core/axios";

// components
import Preloader from "@App/Core/components/Preloader";

// styles
const StaffListStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;

    a {
        display: block;
        text-decoration: none;
        cursor: pointer;

        img {
            width: 100%;
            display: block;
        }

        .name-plate {
            background-color: ${({ theme }) => theme.colors.primary.default};
            padding: 10px;
            height: 90px;

            h3 {
                color: ${({ theme }) => theme.colors.secondary.light};
                font-size: 24px;
                margin: 0px 0px 10px;
                line-height: 100%;
            }
            h4 {
                color: ${({ theme }) => theme.colors.secondary.light};
                font-size: 16px;
                margin: 0px;
                line-height: 100%;
            }
        }
    }
`;

// component
const StaffList = () => {
    const [staffMembers, setStaffMembers] = useState([]);

    useEffect(() => {
        const fetchStaff = async () => {
            const resp = await axios.get("/staff");
            setStaffMembers(resp.data);
        };

        fetchStaff();
    }, []);

    if (staffMembers.length < 1) return <Preloader />;

    return (
        <StaffListStyled>
            {staffMembers.map((staffMember) => {
                const { id, src, name, accolades } = staffMember;
                const role = accolades[0];
                return (
                    <NavLink key={id} to={`/staff/${id}`}>
                        <img src={src} alt={name} />
                        <div className="name-plate">
                            <h3>{name}</h3>
                            <h4>{role}</h4>
                        </div>
                    </NavLink>
                );
            })}
        </StaffListStyled>
    );
};

export default StaffList;
