package com.project.demo.controller;

import com.project.demo.entity.StudentScore;
import com.project.demo.service.StudentScoreService;
import com.project.demo.controller.base.BaseController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.*;

/**
 * 学生分数：(StudentScore)表控制层
 *
 */
@RestController
@RequestMapping("/student_score")
public class StudentScoreController extends BaseController<StudentScore, StudentScoreService> {

    /**
     * 学生分数对象
     */
    @Autowired
    public StudentScoreController(StudentScoreService service) {
        setService(service);
    }



    @PostMapping("/add")
    @Transactional
    public Map<String, Object> add(HttpServletRequest request) throws IOException {
        Map<String,Object> paramMap = service.readBody(request.getReader());
        this.addMap(paramMap);
        return success(1);
    }



    }
