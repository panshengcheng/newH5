window.onload = getResult();
function getResult(){
    $.ajax({
        url:"http://www.ulifecity.com:4088/getSurvey",
        type:"get",
        contentType: "application/json",
        success:function(res){
            let data =res.result;
            for(let i=0; i<data.length; i++){
                $("#sum").html(data[i].sum);
                $("#gender0").html(data[i].g0);
                $("#gender1").html(data[i].g1);
                $("#grade0").html(data[i].gd0);
                $("#grade1").html(data[i].gd1);
                $("#grade2").html(data[i].gd2);
                $("#school0").html(data[i].sh0);
                $("#school1").html(data[i].sh1);
                $("#school2").html(data[i].sh2);
                $("#school3").html(data[i].sh3);
                $("#school4").html(data[i].sh4);
                $("#school5").html(data[i].sh5);
                $("#school6").html(data[i].sh6);
                $("#school7").html(data[i].sh7);
                $("#school8").html(data[i].sh8);
                $("#school9").html(data[i].sh9);
                $("#alimony0").html(data[i].am0);
                $("#alimony1").html(data[i].am1);
                $("#alimony2").html(data[i].am2);
                $("#cost0").html(data[i].ct0);
                $("#cost1").html(data[i].ct1);
                $("#cost2").html(data[i].ct2);
                $("#cost3").html(data[i].ct3);
                $("#internet0").html(data[i].it0);
                $("#internet1").html(data[i].it1);
                $("#internet2").html(data[i].it2);
                $("#internet3").html(data[i].it3);
                $("#after0").html(data[i].af0);
                $("#after1").html(data[i].af1);
                $("#after2").html(data[i].af2);
                $("#after3").html(data[i].af3);
                $("#relaxation0").html(data[i].rt0);
                $("#relaxation1").html(data[i].rt1);
                $("#relaxation2").html(data[i].rt2);
                $("#relaxation3").html(data[i].rt3);
                $("#relaxation4").html(data[i].rt4);
                $("#activity0").html(data[i].avt0);
                $("#activity1").html(data[i].avt1);
                $("#activity2").html(data[i].avt2);
                $("#activity3").html(data[i].avt3);
                $("#activity4").html(data[i].avt4);
                $("#activity5").html(data[i].avt5);
                $("#activity6").html(data[i].avt6);
                $("#activity7").html(data[i].avt7);
                $("#activity8").html(data[i].avt8);
                $("#activity9").html(data[i].avt9);
                $("#isActivity0").html(data[i].iavt0);
                $("#isActivity1").html(data[i].iavt1);
                $("#isActivity2").html(data[i].iavt2);
                $("#bourn0").html(data[i].bn0);
                $("#bourn1").html(data[i].bn1);
                $("#bourn2").html(data[i].bn2);
                $("#bourn3").html(data[i].bn3);
                $("#bourn4").html(data[i].bn4);
                $("#bourn5").html(data[i].bn5);
                $("#bourn6").html(data[i].bn6);
                $("#bourn7").html(data[i].bn7);
                $("#factor0").html(data[i].ft0);
                $("#factor1").html(data[i].ft1);
                $("#factor2").html(data[i].ft2);
                $("#factor3").html(data[i].ft3);
                $("#factor4").html(data[i].ft4);
                $("#factor5").html(data[i].ft5);
                $("#factor6").html(data[i].ft6);
                $("#factor7").html(data[i].ft7);
                $("#frequency0").html(data[i].fq0);
                $("#frequency1").html(data[i].fq1);
                $("#frequency2").html(data[i].fq2);
                $("#frequency3").html(data[i].fq3);
                $("#brand0").html(data[i].br0);
                $("#brand1").html(data[i].br1);
                $("#goOut0").html(data[i].got0);
                $("#goOut1").html(data[i].got1);
                $("#goOut2").html(data[i].got2);
                $("#way0").html(data[i].wy0);
                $("#way1").html(data[i].wy1);
                $("#way2").html(data[i].wy2);
                $("#way3").html(data[i].wy3);
                $("#bar0").html(data[i].bars0);
                $("#bar1").html(data[i].bars1);
                $("#bar2").html(data[i].bars2);
                $("#bar3").html(data[i].bars3);
                $("#ctf0").html(data[i].ctfs0);
                $("#ctf1").html(data[i].ctfs1);
                $("#ctf2").html(data[i].ctfs2);
                $("#ctf3").html(data[i].ctfs3);
                $("#ctf4").html(data[i].ctfs4);
                $("#ctf5").html(data[i].ctfs5);
                
                $("#film0").html(data[i].films0);
                $("#film1").html(data[i].films1);
                $("#film2").html(data[i].films2);
                $("#film3").html(data[i].films3);
                $("#film4").html(data[i].films4);
                $("#film5").html(data[i].films5);
                $("#film6").html(data[i].films6);

                $("#movie0").html(data[i].mv0);
                $("#movie1").html(data[i].mv1);
                $("#movie2").html(data[i].mv2);
                $("#movie3").html(data[i].mv3);

                $("#hp0").html(data[i].hps0);
                $("#hp1").html(data[i].hps1);
                $("#hp2").html(data[i].hps2);
                $("#hp3").html(data[i].hps3);
                $("#hp4").html(data[i].hps4);
                $("#hp5").html(data[i].hps5);
                $("#hp6").html(data[i].hps6);
                $("#hp7").html(data[i].hps7);

                $("#space0").html(data[i].sp0);
                $("#space1").html(data[i].sp1);

                $("#fortify0").html(data[i].fof0);
                $("#fortify1").html(data[i].fof1);
                $("#fortify2").html(data[i].fof2);
                $("#fortify3").html(data[i].fof3);
                $("#fortify4").html(data[i].fof4);
                $("#fortify5").html(data[i].fof5);
                $("#fortify6").html(data[i].fof6);
                $("#fortify7").html(data[i].fof7);

                $("#attraction0").html(data[i].aat0);
                $("#attraction1").html(data[i].aat1);
                $("#attraction2").html(data[i].aat2);
                $("#attraction3").html(data[i].aat3);
                $("#attraction4").html(data[i].aat4);
                $("#attraction5").html(data[i].aat5);

                $("#trench0").html(data[i].tch0);
                $("#trench1").html(data[i].tch1);

                $("#stockpile0").html(data[i].stk0);
                $("#stockpile1").html(data[i].stk1);

                $("#bookshop0").html(data[i].bkp0);
                $("#bookshop1").html(data[i].bkp1);

                $("#xyl0").html(data[i].xyls0);
                $("#xyl1").html(data[i].xyls1);
                $("#xyl2").html(data[i].xyls2);
                $("#xyl3").html(data[i].xyls3);
                $("#xyl4").html(data[i].xyls4);
                $("#xyl5").html(data[i].xyls5);
                $("#xyl6").html(data[i].xyls6);
                $("#xyl7").html(data[i].xyls7);
                $("#xyl8").html(data[i].xyls8);
                $("#xyl9").html(data[i].xyls9);
                $("#xyl10").html(data[i].xyls10);
                $("#xyl11").html(data[i].xyls11);

                $("#condition0").html(data[i].cd0);
                $("#condition1").html(data[i].cd1);
                $("#condition2").html(data[i].cd2);
                $("#condition3").html(data[i].cd3);
                $("#condition4").html(data[i].cd4);
                $("#condition5").html(data[i].cd5);

                $("#clockIn0").html(data[i].clk0);
                $("#clockIn1").html(data[i].clk1);
               
                $("#hobby0").html(data[i].hb0);
                $("#hobby1").html(data[i].hb1);
                $("#hobby2").html(data[i].hb2);

                $("#terrace0").html(data[i].trc0);
                $("#terrace1").html(data[i].trc1);
            }
        },
        error:function(e){
        
            console.log(e);
        }
    })
}