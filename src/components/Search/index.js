import * as React from 'react';
import { useState } from 'react';
import { SearchContainer, SearchResult, SearchInput, SearchIcon, SearchSuggestion, Input, SearchP, SearchContent } from './SearchElements';
import JSONDATA from '../../Data/suggestion.json';
import { FaSearch, FaTimes } from 'react-icons/fa';
import * as All from '../Parts';
import { Container, LeftColumn, RightColumn } from './SearchElements';

const SearchPage = () => {
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");
    const [close, setClose] = useState(false);
    const [getPart, setGetPart] = useState("");
    const [recommendData, setRecommendData] = useState([]);
    const [wordSearch, setWordSearch] = useState("");

    const handleFilter = (event) => {
        setClose(!close);
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = JSONDATA.filter((value) => {
            return value.keyword.toLowerCase().includes(searchWord.toLowerCase());
        });

        if (searchWord === "") {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }
    };

    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
    };

    const handleSelect = (value) => {
        setWordEntered(value.keyword);
        setClose(!close);
        setGetPart(value.id);
        setRecommendData(value.recommend)
        console.log(value.recommend)
    };

    const handleRecommend = (rcm) => {
        setGetPart(rcm.id);
        setRecommendData(rcm.recommend);
        setWordEntered(rcm.keyword);
    }

    const handleSearch = () => {
        // let temp = wordEntered;
        // const newTemp = temp.replace(/\s/g, '-');
        // console.log(newTemp);
        setWordSearch("https://www.google.com/search?q=" + wordEntered)
        // console.log(wordEntered)
    }

    return (
        <>
            <SearchContainer>
                <div className="search" style={{ height: "100%", width: "100%", maxWidth: "1100px" }}>
                    <SearchInput className="searchInputs">
                        <Input
                            type="text"
                            placeholder="Tìm kiếm..."
                            value={wordEntered}
                            onChange={handleFilter}
                        />
                        <SearchIcon className="searchIcon">
                            {filteredData.length === 0 ? (
                                <a href={wordSearch} style={{ color: "var(--quinary-color" }} target="_blank" rel="noreferrer"><FaSearch onClick={handleSearch} /></a>
                            ) : (
                                <FaTimes id="clearBtn" onClick={clearInput} />
                            )}
                        </SearchIcon>
                    </SearchInput>
                    {filteredData.length !== 0 && (
                        <SearchSuggestion className="dataResult" hidden={close}>
                            {filteredData.slice(0, 15).map((value, key) => {
                                return (
                                    <SearchResult className="dataItem" target="_blank" key={key}>
                                        <SearchP id={value.id} onClick={() => handleSelect(value)}>{value.keyword}</SearchP>
                                    </SearchResult>
                                );
                            })}
                        </SearchSuggestion>
                    )}
                    <Container>
                        <LeftColumn style={{ top: "200px" }}>
                            {
                                recommendData.length !== 0 && (
                                    <div>
                                        <h2>Kiến thức liên quan</h2>
                                        {
                                            JSONDATA.filter((item) => {
                                                return recommendData.some((val) => {
                                                    return val === item.id
                                                })
                                            }).map((res, key) => {
                                                console.log(res)
                                                return (
                                                    <SearchResult className="dataItem" target="_blank" key={key}>
                                                        <SearchP style={{ color: "var(--quinary-color)" }} onClick={() => handleRecommend(res)}>{res.keyword}</SearchP>
                                                    </SearchResult>
                                                )
                                            })
                                        }
                                    </div>
                                )
                                // || (
                                //     console.log(recommendData.length)
                                // )
                            }
                        </LeftColumn>
                        <RightColumn>
                            <SearchContent>
                                {
                                    getPart === '1' && <All.MenhDe />
                                }
                                {
                                    getPart === '2' && <All.PhanLoaiMenhDe />
                                }
                                {
                                    getPart === '3' && <All.PhucHop />
                                }
                                {
                                    getPart === '4' && <All.SoCap />
                                }
                                {
                                    getPart === '5' && <All.PhuDinh />
                                }
                                {
                                    getPart === '6' && <All.Hoi />
                                }
                                {
                                    getPart === '7' && <All.Tuyen />
                                }
                                {
                                    getPart === '8' && <All.KeoTheo />
                                }
                                {
                                    getPart === '9' && <All.KeoTheoHaiChieu />
                                }
                                {
                                    getPart === '10' && <All.BieuThucLogic />
                                }
                                {
                                    getPart === '11' && <All.BangChanTri />
                                }
                                {
                                    getPart === '12' && <All.TuongDuongLogic />
                                }
                                {
                                    getPart === '13' && <All.CacLuatLogic />
                                }
                                {
                                    getPart === '14' && <All.QuyTacSuyDien />
                                }
                                {
                                    getPart === '15' && <All.QuyTacKhangDinh />
                                }
                                {
                                    getPart === '16' && <All.QuyTacPhuDinh />
                                }
                                {
                                    getPart === '17' && <All.QuyTacTamDoanLuan />
                                }
                                {
                                    getPart === '18' && <All.QuyTacPhanChung />
                                }
                                {
                                    getPart === '19' && <All.QuyTacChungMinhTheoTruongHop />
                                }
                                {
                                    getPart === '20' && <All.QuyTacPhanViDu />
                                }
                                {
                                    getPart === '21' && <All.ViTuLuongTu />
                                }
                                {
                                    getPart === '22' && <All.CacPhepToanLogic />
                                }
                                {
                                    getPart === '23' && <All.CacPhepToanTrenViTu />
                                }
                                {
                                    getPart === '24' && <All.DinhLyViTuLuongTu />
                                }
                                {
                                    getPart === '25' && <All.QuanHeHaiNgoi />
                                }
                                {
                                    getPart === '26' && <All.TinhPhanXa />
                                }
                                {
                                    getPart === '27' && <All.TinhDoiXungPhanXung />
                                }
                                {
                                    getPart === '28' && <All.TinhBacCau />
                                }
                                {
                                    getPart === '29' && <All.BieuDienQuanHe />
                                }
                                {
                                    getPart === '30' && <All.QuanHeTuongDuong />
                                }
                                {
                                    getPart === '31' && <All.LopTuongDuong />
                                }
                                {
                                    getPart === '32' && <All.SuPhanHoachCacLopTuongDuong />
                                }
                                {
                                    getPart === '33' && <All.QuanHeThuTu />
                                }
                                {
                                    getPart === '34' && <All.ThuTuToanPhanBanPhan />
                                }
                                {
                                    getPart === '35' && <All.BieuDoHasse />
                                }
                                {
                                    getPart === '36' && <All.PhanTuNhoNhatLonNhat />
                                }
                                {
                                    getPart === '37' && <All.PhanTuToiThieuToiDai />
                                }
                                {
                                    getPart === '38' && <All.DaiSoLogicB />
                                }
                                {
                                    getPart === '39' && <All.MotSoPhepToanHaiNgoi />
                                }
                                {/* {
                            getPart === '40' && <All.DaiSoBoole />
                        } */}
                                {
                                    getPart === '41' && <All.DaiSoBoole />
                                }
                                {
                                    getPart === '42' && <All.CacPhepToanLogicBoole />
                                }
                                {
                                    getPart === '43' && <All.HamBoole />
                                }
                                {
                                    getPart === '44' && <All.TichSoCap />
                                }
                                {/* {
                            getPart === '45' && <All />
                        } */}
                                {
                                    getPart === '46' && <All.BieuThucBoole />
                                }
                                {
                                    getPart === '47' && <All.DangNoiRoiChinhTac />
                                }
                                {
                                    getPart === '48' && <All.CongThucDaThucToiThieu />
                                }
                                {
                                    getPart === '49' && <All.BieuDoKarnaughCuaHamBoole />
                                }
                                {
                                    getPart === '50' && <All.BanDoKarnaugh />
                                }
                                {/* {
                            getPart === '51' && <All />
                        } */}
                                {
                                    getPart === '52' && <All.KarnaughHaiBien />
                                }
                                {
                                    getPart === '53' && <All.KarnaughBaBien />
                                }
                                {
                                    getPart === '54' && <All.KarnaughBonBien />
                                }
                                {
                                    getPart === '55' && <All.TimCongThucDaThucToiThieu />
                                }
                                {
                                    getPart === '56' && <All.QuineMcClusky />
                                }
                                {
                                    getPart === '57' && <All.DangTongChuanTacThuGon />
                                }
                                {
                                    getPart === '58' && <All.DangTongChuanTacToiThieu />
                                }
                                {
                                    getPart === '59' && <All.CacCongLogic />
                                }
                            </SearchContent>
                        </RightColumn>
                    </Container>
                    {/* <SearchContent>
                        <All />
                    </SearchContent> */}
                </div>
            </SearchContainer>
        </>
    )
}

export default SearchPage
